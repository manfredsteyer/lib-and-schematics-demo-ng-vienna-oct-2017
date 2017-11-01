import { AbstractFormatterService } from 'my-lib';

export class CustomLogFormatterService implements AbstractFormatterService {

    public format(message: string): string {
        
        let result = '^.^';
        for(let i=0; i<message.length; i++) {
            if (i % 2 == 0) {
                result += message.charAt(i).toUpperCase();
            }
            else {
                result += message.charAt(i).toLowerCase();
            }
        }
        result += '>"<';
        return result;

    }

}