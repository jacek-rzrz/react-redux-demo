import { mergePayload } from '../utils';
import { saveSignUpData} from '.';

export const reducer = mergePayload(saveSignUpData)
