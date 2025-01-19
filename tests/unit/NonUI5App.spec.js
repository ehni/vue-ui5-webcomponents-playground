import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import NonUI5App from "../../src/NonUI5App.vue";

describe("NonUI5App.vue", () => {
  it("renders the component", () => {
    const wrapper = mount(NonUI5App);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the initial content", () => {
    const wrapper = mount(NonUI5App);
    expect(wrapper.find("h1").text()).toBe("Hello World");
    expect(wrapper.find("input").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Log Input");
    expect(wrapper.find("p").text()).toBe("");
  });

  it("updates loggedText when button is clicked", async () => {
    const wrapper = mount(NonUI5App);
    const input = wrapper.find("input");
    const button = wrapper.find("button");

    await input.setValue("Test input");
    await button.trigger("click");

    expect(wrapper.find("p").text()).toBe("Test input");
  });
});
