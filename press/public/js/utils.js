function clear_block(wrapper) {
    wrapper.html('');
}

function remap(data, data_template) {
    let new_data = [];
    for(let d of data) {
        new_data.push(data_template(d));
    }
    return new_data;
}

function formatDate(data) {
    return data.map(d => ({
        date: d.date,
        toString: () => DateTime.fromSQL(d.date).toFormat('d MMM')
    }));
}

function format_date(data) {
    let value = data.map(d => {
        return d.date
    });
    return value; 
}