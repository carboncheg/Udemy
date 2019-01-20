let json = '{"id": 2}';

try {
    let user = JSON.parse(json);
    console.log(user);

    if(!user.name) {
        throw new Error('В этих данных нет имени');
    }
    
    console.log('Начинаем работу');
    console.log(a);
    console.log('Результат');
} catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку "${error.name}" с описанием "${error.message}"`);
} finally {
    console.log('Я выполнюсь всегда');
}

console.log('Я всё равно буду работать');