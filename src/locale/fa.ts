/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';
import fa from '../locales/fa';

/**
 * The faker instance for the `fa` locale.
 *
 * - Language: Farsi/Persian
 * - Endonym: فارسی
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `fa`
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [fa, en, base],
});
