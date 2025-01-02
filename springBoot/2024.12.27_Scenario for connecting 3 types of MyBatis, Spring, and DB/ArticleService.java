package com.example1.testapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example1.testapp.domain.ArticleDto;
import com.example1.testapp.mapper.ArticleMapper;
import com.example1.testapp.util.Criteria;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@Service
public class ArticleService {

    private final ArticleMapper articleMapper;


    public List<ArticleDto> retrieveArticleList() {
        return articleMapper.selectArticleList();
    }

    public int createArtcile(ArticleDto articleDto) {
        articleMapper.insertArticle(articleDto);
        return articleDto.getId();
    }

    public ArticleDto retrieveArticleById(int id) {
        return articleMapper.selectArticleById(id);
    }

    public void modifyArticle(ArticleDto articleDto) {
        articleMapper.updateArticle(articleDto);
    }
    
    public List<ArticleDto> searchArticleList(Criteria criteria) {
        return articleMapper.findArticleList(criteria);
    }

}
