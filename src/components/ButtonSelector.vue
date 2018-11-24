<template>
  <v-item-group :value="value" :multiple="multiple" v-model="valueInternal">
    <div v-for="option in options" :key="option">
      <v-item :value="option">
        <v-btn
          :color="active ? 'primary' : ''"
          slot-scope="{
            active,
            toggle
          }"
          large
          round
          @click.native="toggle"
          >{{ option }}</v-btn
        >
      </v-item>
    </div>
  </v-item-group>
</template>

<script>
export default {
  name: "button-selector",
  props: ["id", "options", "multiple", "value"],
  components: {},
  computed: {
    valueInternal: {
      get: function() {
        if (this.value) {
          return this.value;
        }
      },
      set: function(newValue) {
        this.$store.dispatch("profileFormData/updateButtonSelect", {
          id: this.id,
          newValue: newValue
        });
      }
    }
  }
};
</script>
