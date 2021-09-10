1. Установить NVM
2. Установить Node LTS версию
3. Создать NPM пакет (npm init)
   1. Пакет должен отдавать информацию о вашем IP
   2. Если IP адресс не определен отдать 0.0.0.0

Пример кода:

```javascript
exports.getIpInfo = function() {
  console.log("Put code to this function");
}
```

4. Зарелизить пакет с версией `1.0.1-alpha`
5. Добавить tag с версией в репозиторий
6. Описать функционал в README.md
