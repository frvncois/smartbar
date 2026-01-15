<script setup lang="ts"></script>

<template>
  <section>
    <ul>
      <li><p>Thank you for your RSVP — you’re in. </p></li>
      <li><p>The night begins at 8 PM and stretches into the late hours.<br>
          The rest is yours to uncover…</p>
      </li>
      <li>
        <img src="@/assets/logo.svg"/><img src="@/assets/ere.svg"/><img src="@/assets/flyjin.svg"/>
      </li>
  </ul>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}
img {
  height: 1em;
  width: auto;
  margin: 0 1em;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
li:last-child {
  margin-top: 16em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2em;
}
@media (max-width: 768px) {
  li:last-child {
    flex-direction: column;
  }
}
</style>
