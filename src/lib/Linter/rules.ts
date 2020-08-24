import { Linter } from 'eslint';

export const rules: Linter.Config = {
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	rules: {
		'getter-return': 'error',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-buffer-constructor': 'error',
		'no-caller': 'error',
		'no-catch-shadow': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extra-label': 'error',
		'no-extra-semi': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-globals': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-mixed-requires': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-regex-spaces': 'error',
		'no-shadow': 'error',
		'no-this-before-super': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unused-vars': 'error',
		'no-use-before-define': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-with': 'error',
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': 'error',
		'symbol-description': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		yoda: 'error'
	}
};
