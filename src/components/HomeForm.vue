<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isSubmitting = ref(false)

const handleSubmit = (event: Event) => {
  event.preventDefault()

  const form = event.target as HTMLFormElement
  const checkbox = form.querySelector('input[type="checkbox"]') as HTMLInputElement

  // Validate 21+ checkbox
  if (!checkbox.checked) {
    alert('Please confirm you are 21+')
    return
  }

  // Prevent double submission
  if (isSubmitting.value) return
  isSubmitting.value = true

  // Create hidden iframe for submission
  const iframe = document.createElement('iframe')
  iframe.name = 'hidden-mailchimp-iframe'
  iframe.style.display = 'none'
  document.body.appendChild(iframe)

  // Submit to Mailchimp via iframe
  form.target = 'hidden-mailchimp-iframe'
  form.submit()

  // Wait briefly then redirect
  setTimeout(() => {
    document.body.removeChild(iframe)
    router.push('/confirm')
  }, 1000)
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
                <form
                    action="https://flyjinmtl.us21.list-manage.com/subscribe/post?u=5c39ede37fffc5e36224f6c6e&id=e4bc816560&f_id=00708de6f0"
                    method="post"
                    @submit="handleSubmit"
                >
                    <input type="text" name="FNAME" placeholder="First Name" required />
                    <input type="text" name="LNAME" placeholder="Last Name" required />
                    <input type="email" name="EMAIL" placeholder="Email address" required />
                    <label>I confirm I am 21+<input type="checkbox" required /></label>
                    <input type="number" name="MMERGE5" placeholder="Number of guests" required />
                    <input type="text" name="MMERGE6" placeholder="Mailing address (optional — occasionally used for fun'merch shipments)" />
                    <!-- Honeypot field for spam protection -->
                    <input type="text" name="b_5c39ede37fffc5e36224f6c6e_e4bc816560" tabindex="-1" value="" style="position: absolute; left: -5000px;" aria-hidden="true" />
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