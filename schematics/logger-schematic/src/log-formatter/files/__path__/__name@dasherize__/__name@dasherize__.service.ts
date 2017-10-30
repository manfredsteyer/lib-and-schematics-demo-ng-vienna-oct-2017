import { AbstractFormatterService } from 'my-lib';

export class <%= classify(name) %>Service implements AbstractFormatterService {

    public format(message: string): string {
<% if (demoImpl) { %>        
        let result = '';
        for(let i=0; i<message.length; i++) {
            if (i % 2 == 0) {
                result += message.charAt(i).toUpperCase();
            }
            else {
                result += message.charAt(i).toLowerCase();
            }
        }
        return result;
<% } else { %>        
        return message;
<% } %>
    }

}