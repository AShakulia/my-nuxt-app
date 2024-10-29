import { execSync } from 'child_process';
import { copyFileSync, existsSync } from 'fs';

try {
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

    // Проверка наличия файла .env
    if (!existsSync('.env')) {
        throw new Error('.env does not exist');
    }

    // Проверка наличия файла .env.preview
    if (!existsSync('.env.preview')) {
        throw new Error('.env.preview does not exist');
    }

    if (currentBranch === 'branch1') {
        // Используем файл для branch1
        copyFileSync('.env.preview', '.env');
    } else if (currentBranch === 'main') {
        // Используем файл для main
        copyFileSync('.env', '.env'); // здесь просто копируем основной файл
    } else {
        // Для других веток
        copyFileSync('.env', '.env');
    }

    console.log('Environment file set up successfully.');
} catch (error) {
    console.error('Error setting up environment file:', error);
}
