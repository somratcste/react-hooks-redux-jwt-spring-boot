import http from '../http-common';

const getAll = () => {
    return http.get("/quotes/");
};

const get = id => {
    return http.get(`/quotes/${id}`);
};

const create = (data) => {
    return http.post("/quotes/", JSON.stringify(data));
};

const update = (id, data) => {
    return http.put(`/quotes/${id}`, data);
};

const remove = id => {
    return http.delete(`/quotes/${id}`);
};

const removeAll = () => {
    return http.delete(`/quotes`);
};

const findByTitle = title => {
    return http.get(`/quotes?title=${title}`);
};

const QuoteDataService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};

export default QuoteDataService;