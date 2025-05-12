import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders the passed message', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Olá mundo!' },
    })
    expect(wrapper.text()).toContain('Olá mundo!')
  })
  it('renders the message inside an h1 tag', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Título de Teste' },
    })
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toBe('Título de Teste')
  })
})
