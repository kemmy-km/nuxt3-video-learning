<template>
  <div class="navBar">
    <!-- <NuxtLink to="/">HOME / </NuxtLink>
    <NuxtLink to="/about">about / </NuxtLink>
    <NuxtLink to="/teleport-test">teleport-test / </NuxtLink>
    <NuxtLink to="/list-test">list-test / </NuxtLink> -->

    <nav class="navbar navbar-expand-md navbar-light bg-white">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">VideoApp</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Top</nuxt-link>
            </li>
            <!-- <li class="nav-item">
              <nuxt-link to="/category" class="nav-link">カテゴリー</nuxt-link>
            </li> -->
            <li class="nav-item">
              <nuxt-link to="/courses" class="nav-link">コース一覧</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/setting" class="nav-link">設定</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: #333;
  text-decoration: none;
  padding: 1rem;
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: block;
  }
}

.nav-active {
  background-color: #333;
}

.nav-active li a {
  color: #fff;
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

</style>
