import assert from 'node:assert/strict';
import { wheelConfig } from '../config.js';
import test from 'node:test';

test('globalDivisionCount is 132', () => {
  assert.equal(wheelConfig.globalDivisionCount, 132);
});

test('wheel has seven tiers', () => {
  assert.equal(wheelConfig.tiers.length, 7);
});

test('overlays is an array', () => {
  assert.ok(Array.isArray(wheelConfig.overlays));
});
