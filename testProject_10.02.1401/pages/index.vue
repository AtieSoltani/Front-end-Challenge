<template>

  <div class="bg-[#F9F9F9]">

    <div class="mx-auto lg:py-14 py-6 px-4 max-w-7xl">

      <!--title-->
      <h4 class="font-bold text-2xl text-[#4E4E4E]">
        دسته بندی ها
      </h4>
      <!--END title-->

      <!--categories-->
      <ul role="list"
          class="py-8 text-center text-white text-xl font bold grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-6">
        <li class="categories cook max-w-48 h-20 rounded-lg col-span-1 ">
          آشپزی
        </li>

        <li class="categories life max-w-48 h-20 rounded-lg col-span-1 ">
          سبک زندگی
        </li>

        <li class="categories health max-w-48 h-20 rounded-lg col-span-1 ">
          سلامت
        </li>

        <li class="categories knowledge max-w-48 h-20 rounded-lg col-span-1 ">
          دانستنی
        </li>

        <li class="categories news max-w-48 h-20 rounded-lg col-span-1 ">
          اخبار ترخینه
        </li>

        <li class="categories new max-w-48 h-20 rounded-lg col-span-1 ">
          تازه ها
        </li>

      </ul>
      <!--END categories-->

      <!--posts-->
      <ul role="list"
          class="py-8 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3">

        <li class="rounded-lg  bg-white col-span-1 ">

          <div class="relative pb-1 md:pb-2">
            <img class="w-full max-h-96" src="@/static/images/posts/post1.jpg">
            <div class="absolute m-4 p-2 top-0 font-bold text-sm text-[#1E385A] text-center bg-[#E9EBEF] rounded">
              آشپزی
            </div>
          </div>

          <div class="px-4">
            <p class="py-2 text-[#424242]">
              خواص گوشت بوقلمون
            </p>
            <div class="pb-2 font-bold text-sm text-[#717171] leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با ...
            </div>
            <div class="py-6 flex items-center justify-between">

              <div class="flex items-center">
                <img class="max-h-12 max-w-12" src="@/static/images/user1.jpg">
                <div class="pr-2">
                  <p class="pb-0.5 font-bold text-sm text-[#717171]">
                    مهتاب میکاییلی
                  </p>
                  <p class="font-bold text-sm text-[#717171]">
                    1400/07/29
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.6667 2.33366V12.3337H3.30841L2.33341 13.3087V2.33366H15.6667ZM15.6667 0.666992H2.33341C1.41675 0.666992 0.666748 1.41699 0.666748 2.33366V15.3253C0.666748 16.067 1.56675 16.442 2.09175 15.917L4.00008 14.0003H15.6667C16.5834 14.0003 17.3334 13.2503 17.3334 12.3337V2.33366C17.3334 1.41699 16.5834 0.666992 15.6667 0.666992Z"
                    fill="#717171"/>
                </svg>
                <p class="pr-2 text-sm text-[#717171]">
                  5 دیدگاه
                </p>

              </div>

            </div>

          </div>

        </li>

        <li class="rounded-lg  bg-white col-span-1 ">

          <div class="relative pb-1 md:pb-2">
            <img class="w-full max-h-96" src="@/static/images/posts/post2.jpg">
            <div class="absolute m-4 p-2 top-0 font-bold text-sm text-[#1E385A] text-center bg-[#E9EBEF] rounded">
              آشپزی
            </div>
          </div>

          <div class="px-4">
            <p class="py-2 text-[#424242]">
              خواص گوشت بوقلمون
            </p>
            <div class="pb-2 font-bold text-sm text-[#717171] leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با ...
            </div>
            <div class="py-6 flex items-center justify-between">

              <div class="flex items-center">
                <img class="max-h-12 max-w-12" src="@/static/images/user1.jpg">
                <div class="pr-2">
                  <p class="pb-0.5 font-bold text-sm text-[#717171]">
                    مهتاب میکاییلی
                  </p>
                  <p class="font-bold text-sm text-[#717171]">
                    1400/07/29
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.6667 2.33366V12.3337H3.30841L2.33341 13.3087V2.33366H15.6667ZM15.6667 0.666992H2.33341C1.41675 0.666992 0.666748 1.41699 0.666748 2.33366V15.3253C0.666748 16.067 1.56675 16.442 2.09175 15.917L4.00008 14.0003H15.6667C16.5834 14.0003 17.3334 13.2503 17.3334 12.3337V2.33366C17.3334 1.41699 16.5834 0.666992 15.6667 0.666992Z"
                    fill="#717171"/>
                </svg>
                <p class="pr-2 text-sm text-[#717171]">
                  5 دیدگاه
                </p>

              </div>

            </div>

          </div>

        </li>
        <li class="rounded-lg  bg-white col-span-1 ">

          <div class="relative pb-1 md:pb-2">
            <img class="w-full max-h-96" src="@/static/images/posts/post1.jpg">
            <div class="absolute m-4 p-2 top-0 font-bold text-sm text-[#1E385A] text-center bg-[#E9EBEF] rounded">
              آشپزی
            </div>
          </div>

          <div class="px-4">
            <p class="py-2 text-[#424242]">
              خواص گوشت بوقلمون
            </p>
            <div class="pb-2 font-bold text-sm text-[#717171] leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با ...
            </div>
            <div class="py-6 flex items-center justify-between">

              <div class="flex items-center">
                <img class="max-h-12 max-w-12" src="@/static/images/user1.jpg">
                <div class="pr-2">
                  <p class="pb-0.5 font-bold text-sm text-[#717171]">
                    مهتاب میکاییلی
                  </p>
                  <p class="font-bold text-sm text-[#717171]">
                    1400/07/29
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.6667 2.33366V12.3337H3.30841L2.33341 13.3087V2.33366H15.6667ZM15.6667 0.666992H2.33341C1.41675 0.666992 0.666748 1.41699 0.666748 2.33366V15.3253C0.666748 16.067 1.56675 16.442 2.09175 15.917L4.00008 14.0003H15.6667C16.5834 14.0003 17.3334 13.2503 17.3334 12.3337V2.33366C17.3334 1.41699 16.5834 0.666992 15.6667 0.666992Z"
                    fill="#717171"/>
                </svg>
                <p class="pr-2 text-sm text-[#717171]">
                  5 دیدگاه
                </p>

              </div>

            </div>

          </div>

        </li>
        <li class="rounded-lg  bg-white col-span-1 ">

          <div class="relative pb-1 md:pb-2">
            <img class="w-full max-h-96" src="@/static/images/posts/post1.jpg">
            <div class="absolute m-4 p-2 top-0 font-bold text-sm text-[#1E385A] text-center bg-[#E9EBEF] rounded">
              آشپزی
            </div>
          </div>

          <div class="px-4">
            <p class="py-2 text-[#424242]">
              خواص گوشت بوقلمون
            </p>
            <div class="pb-2 font-bold text-sm text-[#717171] leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با ...
            </div>
            <div class="py-6 flex items-center justify-between">

              <div class="flex items-center">
                <img class="max-h-12 max-w-12" src="@/static/images/user1.jpg">
                <div class="pr-2">
                  <p class="pb-0.5 font-bold text-sm text-[#717171]">
                    مهتاب میکاییلی
                  </p>
                  <p class="font-bold text-sm text-[#717171]">
                    1400/07/29
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.6667 2.33366V12.3337H3.30841L2.33341 13.3087V2.33366H15.6667ZM15.6667 0.666992H2.33341C1.41675 0.666992 0.666748 1.41699 0.666748 2.33366V15.3253C0.666748 16.067 1.56675 16.442 2.09175 15.917L4.00008 14.0003H15.6667C16.5834 14.0003 17.3334 13.2503 17.3334 12.3337V2.33366C17.3334 1.41699 16.5834 0.666992 15.6667 0.666992Z"
                    fill="#717171"/>
                </svg>
                <p class="pr-2 text-sm text-[#717171]">
                  5 دیدگاه
                </p>

              </div>

            </div>

          </div>

        </li>
        <li class="rounded-lg  bg-white col-span-1 ">

          <div class="relative pb-1 md:pb-2">
            <img class="w-full max-h-96" src="@/static/images/posts/post1.jpg">
            <div class="absolute m-4 p-2 top-0 font-bold text-sm text-[#1E385A] text-center bg-[#E9EBEF] rounded">
              آشپزی
            </div>
          </div>

          <div class="px-4">
            <p class="py-2 text-[#424242]">
              خواص گوشت بوقلمون
            </p>
            <div class="pb-2 font-bold text-sm text-[#717171] leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با ...
            </div>
            <div class="py-6 flex items-center justify-between">

              <div class="flex items-center">
                <img class="max-h-12 max-w-12" src="@/static/images/user1.jpg">
                <div class="pr-2">
                  <p class="pb-0.5 font-bold text-sm text-[#717171]">
                    مهتاب میکاییلی
                  </p>
                  <p class="font-bold text-sm text-[#717171]">
                    1400/07/29
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.6667 2.33366V12.3337H3.30841L2.33341 13.3087V2.33366H15.6667ZM15.6667 0.666992H2.33341C1.41675 0.666992 0.666748 1.41699 0.666748 2.33366V15.3253C0.666748 16.067 1.56675 16.442 2.09175 15.917L4.00008 14.0003H15.6667C16.5834 14.0003 17.3334 13.2503 17.3334 12.3337V2.33366C17.3334 1.41699 16.5834 0.666992 15.6667 0.666992Z"
                    fill="#717171"/>
                </svg>
                <p class="pr-2 text-sm text-[#717171]">
                  5 دیدگاه
                </p>

              </div>

            </div>

          </div>

        </li>

      </ul>
      <!--END posts-->

      <!--    <div v-if="posts" >-->
      <!--      {{ posts}}-->
      <!--    </div>-->

    </div>

  </div>

</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    this.$store.dispatch('getPosts')
  },
  computed: {
    posts() {
      return this.$store.getters['getPosts']
    },
  },
  methods: {}
}
</script>

<style scoped>
.categories {
  padding-top: 13%;
  background-size: cover !important;
}

.categories:hover  {
opacity: 80%;
}

.cook {
  background: linear-gradient(rgba(40, 64, 102, 0.5), rgba(40, 64, 102, 0.5)), url("@/static/images/categories/img1.jpg");
}

.life {
  background: linear-gradient(rgba(40, 64, 102, 0.5), rgba(40, 64, 102, 0.5)), url("@/static/images/categories/img2.jpg");
}

.health {
  background: linear-gradient(rgba(40, 64, 102, 0.5), rgba(40, 64, 102, 0.5)), url("@/static/images/categories/img3.jpg");
}

.knowledge {
  background: linear-gradient(rgba(40, 64, 102, 0.5), rgba(40, 64, 102, 0.5)), url("@/static/images/categories/img4.jpg");
}

.news {
  background: linear-gradient(rgba(40, 64, 102, 0.5), rgba(40, 64, 102, 0.5)), url("@/static/images/categories/img5.jpg");
}

.new {
  background: linear-gradient(rgba(40, 64, 102, 0.5), rgba(40, 64, 102, 0.5)), url("@/static/images/categories/img6.jpg");
}

</style>
