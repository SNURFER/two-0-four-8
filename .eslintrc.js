module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
      '@typescript-eslint',
  ],
  extends: [
      // Airbnb style guide 적용.
      'airbnb',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules/', 'src/module', 'src/**/*.css.d.ts', 'src/**/*.scss.d.ts'],
  settings: {
      'import/resolver': {
          node: {
              extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
              moduleDirectory: ['node_modules', 'src/', 'src/module/']
          }
      }
  },
  rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      // dependencies 무시.
      'import/no-extraneous-dependencies': ['error', {
          devDependencies: true,
      }],
      // Component attribute에 {} 맘대로 써도 됨.
      'react/jsx-curly-brace-presence': 'off',
      'prettier/prettier': ['error', {
          // " 대신 ' 사용.
          singleQuote: true,
          // 코드 마지막에 semicolon 사용.
          semi: true,
          // 탭 대신 스페이스 사용.
          useTabs: false,
          // 들여쓰기: 4칸.
          tabWidth: 4,
          // 코드 길이 <= 120칸.
          printWidth: 120,
          // Arrow function이 매개변수 1개일 때 괄호 생략.
          arrowParens: 'avoid',
          // Line ending: lf 사용.
          endOfLine: 'lf'
      }],
      // Import할 때 확장자 무조건 쓰라는 것 off.
      'import/extensions': ['error', 'ignorePackages', {
          'js': 'never',
          'jsx': 'never',
          'ts': 'never',
          'tsx': 'never'
      }],
      // Class 내부에서 this 접근 안 하는 non-static method 허용.
      'class-methods-use-this': 'off',
      // React 사용시 정의 안 되어 있다는 에러 나는거 수정. (https://stackoverflow.com/a/64024916/2804329)
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      // 함수 자료형 항상 명시하는 것 off.
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // 예전 방식의 default props 사용법 강제 off (https://github.com/yannickcr/eslint-plugin-react/issues/1433)
      'react/require-default-props': 'off',
      // MobX action을 정의할 때 parameter의 속성을 수정하는 것 때문에 오류나는 것 off.
      // (https://stackoverflow.com/questions/35637770/how-to-avoid-no-param-reassign-when-setting-a-property-on-a-dom-object)
      'no-param-reassign': ['error', { props: false }],
      // ESLint가 TypeScript Enum을 제대로 인식하지 못하고 'already declared' 에러 때리는 버그 수정.
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      // onClick이 있으면 onKeyDown 등도 있어야 한다는 에러 off.
      'jsx-a11y/click-events-have-key-events': 'off',
      // File 별 class 갯수 제한 설정
      'max-classes-per-file': ['error', 10],
      // <input/> + <label/> 사용 시 label 안에 input을 넣거나 id로 둘이 연결하는 것 중 하나만 하면 되도록 함.
      // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
      'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
      // Widget Component가 click을 받기 위함.
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      // Video component에 caption(자막)이 없어도 동작하도록 함
      'jsx-a11y/media-has-caption': 'off',
      // type 추론 되면 type명시 안하도록 하는 것
      '@typescript-eslint/no-inferrable-types': 'off',
      // for loop 의 ++, -- 등을 허용
      'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
      // else 문 내에서 다시 if, else가 나오는 것을 허용
      'no-lonely-if': 'off',
  }
};