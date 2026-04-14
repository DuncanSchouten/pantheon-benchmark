/**
 * Shared validation utilities and constants
 */

/**
 * Simple email validation regex that prevents ReDoS (Regular Expression Denial of Service).
 *
 * This pattern uses a simpler approach compared to RFC 5322 compliant regex to avoid
 * catastrophic backtracking vulnerabilities. It checks for:
 * - At least one character before @
 * - @ symbol
 * - At least one character after @
 *
 * For production use with stricter validation, consider using a library like
 * validator.js or email-validator.
 *
 * @example
 * EMAIL_REGEX.test("user@example.com") // true
 * EMAIL_REGEX.test("invalid.email") // false
 * EMAIL_REGEX.test("user@") // false
 */
export const EMAIL_REGEX = /^[^@\s]+@[^@\s]+$/;
