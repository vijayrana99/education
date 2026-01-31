"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsController = exports.NewsController = void 0;
const news_service_1 = require("../services/news.service");
class NewsController {
    async list(req, res) {
        const result = await news_service_1.newsService.getNews(req.query);
        res.json({ data: result.data, meta: { total: result.total, limit: req.query.limit || 10, offset: req.query.offset || 0 } });
    }
    async getBySlug(req, res) {
        const news = await news_service_1.newsService.getNewsBySlug(req.params.slug);
        res.json({ data: news });
    }
    async getById(req, res) {
        const news = await news_service_1.newsService.getNewsById(req.params.id);
        res.json({ data: news });
    }
    async create(req, res) {
        const news = await news_service_1.newsService.createNews(req.body);
        res.status(201).json({ data: news });
    }
    async update(req, res) {
        const news = await news_service_1.newsService.updateNews(req.params.id, req.body);
        res.json({ data: news });
    }
    async delete(req, res) {
        await news_service_1.newsService.deleteNews(req.params.id);
        res.status(204).send();
    }
}
exports.NewsController = NewsController;
exports.newsController = new NewsController();
//# sourceMappingURL=news.controller.js.map