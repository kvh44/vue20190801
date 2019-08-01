import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const id = 'message-id';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { 
        msg: msg ,
        id: id
      }
    })
    //expect(wrapper.text()).toMatch(msg);
    console.log(wrapper.props().id);
    expect(wrapper.props().id).toBe(id);
  })
})
