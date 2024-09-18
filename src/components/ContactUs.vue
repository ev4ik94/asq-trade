<template>
  <div class="container grid grid-cols-2 gap-8 py-[60px]">
    <div>
      <div class="bg-custom-orange rounded-[100px] px-[10px] py-[6px]  w-[160px]">
        <p class="text-white text-center text-[14px]">Связаться с нами</p>
      </div>
      <h1 class="text-color-selection text-[48px] font-semibold font-outfit mt-[16px] mb-[20px]">Why we are considered
        the best in business</h1>
      <p class="text-color-custom-gray text-[20px]">Logisco Air freight service deliver the knowledge & opportunity to optimize every</p>
    </div>

    <div class="bg-custom-orange p-[66px] rounded-[17px]">
      <p class="text-white text-[40px] font-semibold font-outfit">Request Quote Form</p>
      <form @submit.prevent="submit" class="mt-[27px]">
        <p class="text-white font-outfit font-semibold mb-[12px]">Personal Information</p>
        <div class="mb-[25px]">
          <input type="text" v-model="form.firstname" placeholder="Имя" class="rounded-[6px] h-[50px] w-full px-[20px]">
        </div>
        <div class="mb-[25px]">
          <input type="text" v-model="form.companyName" placeholder="Название компании" class="rounded-[6px] px-[20px] h-[50px] w-full">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <input type="text" v-model="form.email" placeholder="Email" class="rounded-[6px] h-[50px] px-[20px] w-full">
          </div>
          <div>
            <input type="text" v-model="form.phone" placeholder="Телефон" class="rounded-[6px] h-[50px] px-[20px] w-full">
          </div>
        </div>

        <button type="submit" class="bg-color-button w-full h-[56px] text-[18px] text-white font-semibold rounded-[10px] mt-[36px] mb-[50px] hover:bg-main-color transition">Отправить</button>
        <p class="text-white text-[20px] font-semibold font-outfit">Или позвоните нам <span class="text-[26px]">&nbsp;+998 90 130 13 39</span></p>
      </form>
    </div>
  </div>
</template>


<script  lang="ts">
export default {
  data(){
    return {
      form: {
        firstname: '',
        companyName: '',
        email: '',
        phone: ''
      }
    }
  },

  methods:{
    submit(){
      console.log(this.form)
    }
  }
}
</script>