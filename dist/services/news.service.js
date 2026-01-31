"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsService = exports.NewsService = void 0;
const news_action_1 = require("../actions/news.action");
const errorHandler_middleware_1 = require("../middlewares/errorHandler.middleware");
class NewsService {
    async getNews(params) {
        return news_action_1.newsAction.findAll(params);
    }
    async getNewsBySlug(slug) {
        const news = await news_action_1.newsAction.findBySlug(slug);
        if (!news)
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'News not found', 404);
        return news;
    }
    async getNewsById(id) {
        const news = await news_action_1.newsAction.findById(id);
        if (!news)
            throw new errorHandler_middleware_1.ApiError('NOT_FOUND', 'News not found', 404);
        return news;
    }
    async createNews(data) {
        return news_action_1.newsAction.create(data);
    }
    async updateNews(id, data) {
        return news_action_1.newsAction.update(id, data);
    }
    async deleteNews(id) {
        return news_action_1.newsAction.delete(id);
    }
}
exports.NewsService = NewsService;
exports.newsService = new NewsService();
//# sourceMappingURL=news.service.js.map