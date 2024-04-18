install:
	npm ci install
publish:
	npm publish --dry-run
lint: 
	npx eslint bin/**/*
lint_fix:
	npx eslint . --fix
	