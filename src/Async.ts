import { rejects } from 'assert';

/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}
/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export async function getData(): Promise<number[]> {
    const result: Promise<number>[] = [];
    const data1 = mock(100);
    result.push(data1);
    const data2 = mock(200);
    result.push(data2);
    const data3 = mock(300);
    result.push(data3);
    return await Promise.all(result);
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */

export async function catchException() {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err: any) {
        return err.message;
    }
}
