<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">ホーム</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/routing">一般公開ページ</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div>
      <!-- ルーティングに指定された内容を表示 -->
      <router-view />
    </div>
  </div>
</template>