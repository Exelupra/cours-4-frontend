// CounterComponent.spec.js

// Importez les dépendances nécessaires (par exemple, Vue Test Utils)
import { shallowMount } from '@vue/test-utils';
import CounterComponent from '@/components/CounterComponent.vue';

describe('CounterComponent', () => {
  it('should render correctly', () => {
    // Utilisez shallowMount pour créer le wrapper
    const wrapper = shallowMount(CounterComponent);

    // Effectuez vos assertions ou tests ici
    // Par exemple, vérifiez si un élément est rendu correctement
    expect(wrapper.find('.counter').exists()).toBe(true);
  });
});
