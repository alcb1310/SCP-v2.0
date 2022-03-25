import moment from 'moment';

export default (date) => {
    const x = moment(date).add(5, 'h').format('yyyy-MM-DD');
    return x;
};
