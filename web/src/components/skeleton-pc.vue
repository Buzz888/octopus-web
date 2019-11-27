<template>
  <div class="skeleton">
      <div class="text-center weight"></div>
    <div class="skeleton-body">
      <div class="skeleton-top">
        <div class="skeleton-title"></div>
        <div class="skeleton-content"></div>
        <div class="skeleton-title"></div>
        <div class="skeleton-content"></div>
        
      </div>
      <div class="skeleton-say"></div>
      <div class="skeleton-right">
        <div class="skeleton-border"></div>
        <div class="skeleton-border"></div>
        <div class="skeleton-border"></div>
      </div>
    </div>
  </div>
</template>
<style >
.skeleton {
  padding: 10px;
  z-index: 9999999;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
}

.skeleton .skeleton-head,
.skeleton .skeleton-title,
.skeleton .skeleton-content {
  background: rgb(194, 207, 214);
}
.skeleton-body {
  margin-top: 5%;
  justify-content: space-around;
  width: 100%;
  display: flex;
}
.skeleton-top {
  width: 20%;
}
.skeleton-title {
  width: 80%;
  height: 8vh;
}

.skeleton-content {
  width: 60%;
  height: 5vh;
  margin: 5vh;
}
.skeleton-say {
  height: 60vh;
  width: 50%;
}
.skeleton-right {
  width: 10%;
  margin-top: 20vh;
}
.skeleton-border {
  margin-left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10%;
}
.skeleton .skeleton-title,
.skeleton .skeleton-border,
.skeleton .skeleton-say,
.skeleton .skeleton-content {
  background: rgb(194, 207, 214);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%
  );
  background-size: 20rem 20rem;
  animation: skeleton-stripes 0.5s linear infinite;
}
@keyframes skeleton-stripes {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 20rem 0;
  }
}
</style>