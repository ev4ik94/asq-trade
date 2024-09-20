<template>
  <div class="container 2xl:grid xl:grid lg:grid grid-cols-2 gap-8
  2xl:py-[60px] xl:py-[60px] lg:py-[60px] py-[40px] observe-elem" id="contactUs">
    <div>
      <div class="bg-custom-orange rounded-[100px] px-[10px] py-[6px]  w-[160px]">
        <p class="text-white text-center text-[14px]">{{$t('contactForm.span')}}</p>
      </div>
      <h1 class="text-color-selection 2xl:text-[48px] xl:text-[48px] lg:text-[48px] text-[40px] font-semibold mt-[16px] mb-[20px]">{{$t('contactForm.title')}}</h1>
      <p class="text-color-custom-gray 2xl:text-[20px] xl:text-[20px] lg:text-[20px]">{{$t('contactForm.text')}}</p>

      <div class="mt-[32px]">
        <div class="flex items-center">
          <div class="bg-custom-orange w-[30px] mr-[12px] h-[30px] rounded-[50%] text-white font-semibold flex justify-center items-center">+</div>
          <p class="text-color-selection font-semibold">{{$t('contactForm.list1')}}</p>
        </div>
        <div class="flex items-center mt-[12px]">
          <div class="bg-custom-orange w-[30px] mr-[12px] h-[30px] rounded-[50%] text-white font-semibold flex justify-center items-center">+</div>
          <p class="text-color-selection font-semibold">{{$t('contactForm.list2')}}</p>
        </div>
        <div class="flex items-center mt-[12px]">
          <div class="bg-custom-orange w-[30px] mr-[12px] h-[30px] rounded-[50%] text-white font-semibold flex justify-center items-center">+</div>
          <p class="text-color-selection font-semibold">{{$t('contactForm.list3')}}</p>
        </div>
        <div class="flex items-center mt-[12px]">
          <div class="bg-custom-orange w-[30px] mr-[12px] h-[30px] rounded-[50%] text-white font-semibold flex justify-center items-center">+</div>
          <p class="text-color-selection font-semibold">{{$t('contactForm.list4')}}</p>
        </div>
        <div class="flex items-center mt-[12px]">
          <div class="bg-custom-orange w-[30px] mr-[12px] h-[30px] rounded-[50%] text-white font-semibold flex justify-center items-center">+</div>
          <p class="text-color-selection font-semibold">{{$t('contactForm.list5')}}</p>
        </div>
        <div class="flex items-center mt-[12px]">
          <div class="bg-custom-orange w-[30px] mr-[12px] h-[30px] rounded-[50%] text-white font-semibold flex justify-center items-center">+</div>
          <p class="text-color-selection font-semibold">{{$t('contactForm.list6')}}</p>
        </div>
      </div>
    </div>

    <div class="bg-custom-orange 2xl:p-[66px] xl:p-[66px] lg:p-[66px] p-[30px] rounded-[17px] mt-[20px] 2xl:mt-0 xl:mt-0 lg:mt-0">
      <p class="text-white 2xl:text-[40px] xl:text-[40px] lg:text-[40px] text-[35px] font-semibold">{{$t('contactForm.formTitle')}}</p>
      <form @submit.prevent="submit" class="mt-[27px] relative overflow-hidden">

        <div class="mb-[25px]">
          <input type="text" v-model="form.firstname" :placeholder="$t('contactForm.formInputName')" class="rounded-[6px] h-[50px] w-full px-[20px]">
          <p class="text-red-500 mt-[6px]" v-if="errors.firstname.length">{{$t(errors.firstname)}}</p>
        </div>
        <div class="mb-[25px]">
          <input type="text" v-model="form.companyName" :placeholder="$t('contactForm.formInputCompany')" class="rounded-[6px] px-[20px] h-[50px] w-full">
          <p class="text-red-500 mt-[6px]" v-if="errors.companyName.length">{{$t(errors.companyName)}}</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <input type="text" v-model="form.email" placeholder="Email" class="rounded-[6px] h-[50px] px-[20px] w-full">
            <p class="text-red-500 mt-[6px]" v-if="errors.email.length">{{$t(errors.email)}}</p>
          </div>
          <div>
            <input  type="text" v-model="form.phone" placeholder="+998 90 000 00 00" class="rounded-[6px] h-[50px] px-[20px] w-full">
            <p class="text-red-500 mt-[6px]" v-if="errors.phone.length">{{$t(errors.phone)}}</p>
          </div>
        </div>

        <div :class="{
          'p-[12px]':true,
          'bg-white':true,
          'rounded-[12px]':true,
          'absolute':true,
          'w-full':true,
          'transition': true,
          'translate-y-[100px]': alertSuccess,
          'translate-y-[10000px]': alertSuccess===false,
        }">
          <p class="text-color-selection">{{$t('alertSuccess')}}</p>
        </div>


        <button type="submit"  class="bg-color-button w-full h-[56px] text-[18px] text-white font-semibold rounded-[10px] mt-[36px] mb-[50px] hover:bg-main-color transition">{{$t('contactForm.formInputButton')}}</button>
        <p class="text-white 2xl:text-[20px] xl:text-[20px] lg:text-[20px] font-semibold font-outfit">{{$t('contactForm.formCall')}} <span class="2xl:text-[26px] xl:text-[26px] lg:text-[26px] text-[18px]">&nbsp;+998 90 130 13 39</span></p>
      </form>
    </div>
  </div>
</template>


<script  lang="ts">
import {ref, watch, reactive, onMounted  } from 'vue'

export default {

  setup(){
    const form = ref({
      firstname: '',
      companyName: '',
      email: '',
      phone: ''
    })



    const errors = reactive({
      firstname: '',
      companyName: '',
      email: '',
      phone: ''
    });


    const validation = ref(false)

    const alertSuccess = ref(false)

    const validateForm = () => {
      let isValid = true;
      let format_phone = form.value.phone.replace(/\s+/g, "").replace('+', "").replace(/-/g, "").replace(/\(/g, "").replace(/\)/g, "")
      format_phone = '+'+format_phone

      if (!form.value.email) {
        errors.email = 'errorInput';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.email = 'errorInputEmail';
        isValid = false;
      } else {
        errors.email = '';
      }

      if (!form.value.phone) {
        errors.phone = 'errorInput';
        isValid = false;

      } else if (!/^\+998(94|95|99|97|90|77|91|93|55|33|88|98)\d{3}\d{2}\d{2}$/.test(format_phone)) {
        errors.phone = 'errorInputPhone';
        isValid = false;
      } else {
        errors.phone = '';
      }

      if (!form.value.companyName) {
        errors.companyName = 'errorInput';
        isValid = false;
      }  else {
        errors.companyName = '';
      }

      if (!form.value.firstname) {
        errors.firstname = 'errorInput';
        isValid = false;
      }  else {
        errors.firstname = '';
      }

      return isValid;
    };
    function submit(){

      if(validateForm()){
        const text_request = `<b>Имя:</b> ${form.value.firstname}%0A<b>Компания:</b> ${form.value.companyName}%0A<b>Номер телефона:</b> ${form.value.phone}%0A<b>Электронная почта:</b> ${form.value.email}`

        fetch(`https://api.telegram.org/bot7605136415:AAH_wVarKip1h9zivmUg6I97744tn0him1Q/sendMessage?parse_mode=HTML&chat_id=-1002321263294&text=${text_request}`)
            .finally(()=>{

              form.value = {
                firstname: '',
                companyName: '',
                email: '',
                phone: ''
              }
              alertSuccess.value = true

              setTimeout(()=>{
                alertSuccess.value = false
              }, 2000)
            })
      }







    }

    return {
      form, submit, alertSuccess, validation,errors
    }
  },






}
</script>