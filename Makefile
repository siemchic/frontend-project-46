install:
	npm ci install
publish:
	npm publish --dry-run
lint: 
	npx eslint bin/**/*
lint_fix:
	npx eslint . --fix
report:
	./gradlew jacocoTestReport
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npm test -- --coverage --coverageProvider=v8
gendiff:
	gendiff __fixtures__/file1.json __fixtures__/file2.json