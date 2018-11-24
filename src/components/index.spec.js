import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import ButtonSelector from "./ButtonSelector.vue";

const localVue = createLocalVue();

describe("ButtonSelector.vue", () => {
  it("renders html", () => {
    const wrapper = shallowMount(ButtonSelector, { localVue });
    wrapper.setProps({
      id: "eyesCharacteristics",
      multiple: true,
      options: ["Hooded", "Monolid", "Protruding"],
      value: []
    });
    console.log(wrapper.html());

    expect(wrapper.html()).toContain('button type="button" class="v-btn');
  });
});
