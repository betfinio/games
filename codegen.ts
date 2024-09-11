import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://api.studio.thegraph.com/query/88622/predict-dev/version/latest',
	documents: ['src/lib/**/gql/*.ts', '!src/lib/**/gql/*.gen.*'],
	generates: {
		'src/gql/': {
			preset: 'client',
			plugins: [],
		},
		'src/lib/**/gql/': {
			preset: 'near-operation-file',
			presetConfig: {
				extension: '.gen.ts',
				baseTypesPath: '@/src/gql/',
			},
			plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
		},
	},
};

export default config;
