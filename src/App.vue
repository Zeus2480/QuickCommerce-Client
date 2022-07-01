<template>
   <v-app>
      <v-app-bar app color="black">
         <div class="d-flex align-center">
            <v-img
               alt="Vuetify Logo"
               class="mr-2"
               contain
               src="./assets/Logo/kErana Logo.svg"
               transition="scale-transition"
               width="40"
            />

            <h1 class="tw-text-white tw-font-semibold tw-text-xl">kErana</h1>
         </div>

         <v-spacer></v-spacer>
         <div class="tw-my-auto tw-mt-1">
            <v-text-field
               solo
               label="Search"
               prepend-inner-icon="mdi-magnify"
            ></v-text-field>
         </div>

         <v-spacer></v-spacer>

         <v-btn class="mr-4"><v-icon>mdi-cart</v-icon> Cart</v-btn>
         <v-btn>Login</v-btn>
      </v-app-bar>

      <v-main>
         <v-container fluid>
            <router-view />
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
   name: "App",

   data: () => ({
      //
   }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
* {
   font-family: "Poppins", sans-serif;
}
.v-application{
  padding: unset !important;
}
</style>
