import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(App);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the shellbar', () => {
    const wrapper = mount(App);
    const shellbar = wrapper.find('ui5-shellbar');
    expect(shellbar.exists()).toBe(true);
  });

  it('renders the popovers', () => {
    const wrapper = mount(App);
    const popover1 = wrapper.find('ui5-popover[ref="popover1"]');
    const popover2 = wrapper.find('ui5-popover[ref="popover2"]');
    expect(popover1.exists()).toBe(true);
    expect(popover2.exists()).toBe(true);
  });
});