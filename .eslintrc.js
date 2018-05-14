module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
    "rules": {
        "import/no-unresolved": 0,
        "import/no-unassigned-import": 0,
        "semi": [
            "error",
            "never"
        ],
        "no-console": "off",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "always",
                "asyncArrow": "always"
            }
        ]
    }
}