// counter.spec.js

// Importez les dépendances nécessaires (par exemple, Jest)
import { expect } from '@jest/globals';
import { useCounterStore } from '@/stores/counter';

describe('CounterStore', () => {
  it('should increment the counter', () => {
    // Utilisez le store comme vous l'avez défini dans votre code
    const counterStore = useCounterStore();

    // Effectuez une action sur le store (par exemple, incrémentation)
    counterStore.increment();

    // Utilisez expect pour faire une assertion sur l'état du store
    expect(counterStore.count).toBe(1);
  });
});
