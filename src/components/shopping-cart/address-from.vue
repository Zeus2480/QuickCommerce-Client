<template>
   <div class="tw-p-6 tw-borde-2 tw-border-solid tw-border-gray-200">
      <h1 class="tw-text-2xl tw-font-semibold">Shopping Cart</h1>
      <div class="tw-mt-8 tw-mb-4 tw-flex">
         <p
            class="tw-px-2 tw-py-0.5 tw-border-solid tw-border-gray-200 tw-border-2 tw-inline tw-rounded-md"
         >
            a.
         </p>
         <h2 class="tw-my-auto tw-text-lg tw-mx-3 tw-font-medium">
            Add Product
         </h2>
      </div>
      <div class="tw-px-8">
         <v-form>
            <v-container>
               <v-row>
                  <v-col cols="12" sm="6">
                     <v-text-field
                        v-model="first"
                        label="Full Name"
                        outlined
                        clearable
                        required
                     ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                     <v-text-field
                        v-model="last"
                        label="Phone No."
                        outlined
                        type="number"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                     ></v-text-field>
                  </v-col>
               </v-row>
               <v-row>
                  <v-col cols="12" sm="12">
                     <v-text-field
                        v-model="first"
                        label="House No., Building Name"
                        outlined
                        clearable
                        required
                     ></v-text-field>
                  </v-col>
               </v-row>
               <v-row>
                  <v-col cols="12" sm="12">
                     <v-text-field
                        v-model="first"
                        label="Road name, Area,Colony"
                        outlined
                        clearable
                        required
                     ></v-text-field>
                  </v-col>
               </v-row>
               <v-row>
                  <v-col cols="12" sm="4">
                     <v-text-field
                        v-model="first"
                        label="City"
                        outlined
                        clearable
                        required
                     ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                     <v-text-field
                        v-model="first"
                        label="State"
                        outlined
                        clearable
                        required
                     ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                     <v-text-field
                        v-model="first"
                        label="Pin Code"
                        outlined
                        clearable
                        required
                        type="number"
                     ></v-text-field>
                  </v-col>
               </v-row>
            </v-container>
         </v-form>
      </div>
      <div class="tw-my-4 tw-flex">
         <p
            class="tw-px-2 tw-py-0.5 tw-border-solid tw-border-gray-200 tw-border-2 tw-inline tw-rounded-md"
         >
            b.
         </p>
         <h2 class="tw-my-auto tw-text-lg tw-mx-3 tw-font-medium">Payment</h2>
      </div>
      <div class="tw-mx-6 tw-border-2 tw-border-solid tw-rounded-xl tw-px-4">
        <v-radio-group
              v-model="ex7"
              column
            >
              <v-radio
                label="Cash on Delivery"
                color="green"
                value="cod"
              ></v-radio>
        </v-radio-group>
      </div>
   </div>
</template>
<style scoped>
.v-application p {
   margin: 0 !important;
}
</style>
