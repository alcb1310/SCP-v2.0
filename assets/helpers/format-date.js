import moment from 'moment';

export default (date) => moment(String(date)).format('YYYY/MM/DD');
