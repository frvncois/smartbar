<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSubmit = (event: Event) => {
  event.preventDefault()
  router.push('/confirm')
}
</script>

<template>
    <section>
        <ul>
            <li>
                <div>
                    <p>417 St-Pierre street<br>Montreal</p>
                    <div class="links">
                        <a href="https://www.instagram.com/flyjinmtl/" target="_blank">Instagram</a>
                        <a href="https://flyjinmtl.com/" target="_blank">Website</a>
                    </div>
                </div>
                <div>
                    <img src="@/assets/flyjin.svg" alt="Logo" />
                </div>
            </li>
            <li>
                <form @submit="handleSubmit">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email address" />
                    <label>I confirm I am 21+<input type="checkbox" /></label>
                    <input type="number" placeholder="Number of guests" />
                    <input type="text" placeholder="Mailing address (optional — occasionally used for fun'merch shipments)" />
                    <button type="submit">Submit rsvp</button>
                </form>
            </li>
            <li></li>
        </ul>
    </section>
</template>


<style scoped>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1em;
    }
    ul {
        display: grid;
        grid-template-columns: 0.33fr 1fr 0.33fr;
        gap: 3em;
    }
    li:first-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        gap: 2em;
        > div {
            display: flex;
            flex-direction: column;
            gap: 1em;
        }
    }
    .links {
        display: flex;
        flex-direction: column;
    }
    img {
        width: 8em;
        height: auto;
    }
    input {
        background: none;
        border: none;
        border-bottom: 1px solid var(--black);
        font-family: inherit;
        text-transform: inherit;
        padding: 0 0 0.5em 0;
        margin: 0 0 0.5em 0;
        width: 100%;
        &::placeholder {
            color: var(--black);
        }
        &:focus {
            outline: none;
        }
    }
    button {
        background: var(--black);
        color: var(--red);
        border: none;
        padding: 0.75em 1.5em;
        text-transform: uppercase;
        font-family: inherit;
        cursor: pointer;
        margin-top: 1em;
    }
    label {
        display: flex;
        justify-content: space-between;
        width: 100%;
        white-space: nowrap;
        border-bottom: 1px solid var(--black);
        padding: 0 0 0.5em 0;;
        align-items: center;
        & input {
            width: auto;
            margin-left: 0;
        }
    }
    input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 1.25em;
        height: 1.25em;
        background-color: var(--red);
        border: 2px solid var(--black);
        cursor: pointer;
        flex-shrink: 0;
        padding: 0;
        margin: 0;
        &:checked {
            background-color: var(--black);
            border: 2px solid var(--black);
        }
    }
    input[type="number"] {
        padding-top: 0.5em;
        -moz-appearance: textfield;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 768px) {
        ul {
            display: flex;
            flex-direction: column;
        }
        li:first-child {
            order: 3;
            display: flex;
            flex-direction: row;
            align-items: end;
            margin-top: 6em;
        }
    }
</style>