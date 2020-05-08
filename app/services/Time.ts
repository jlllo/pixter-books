import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatTime(time: number) {
  return format(new Date(time), 'PPPPp', {
    locale: ptBR,
  });
}
