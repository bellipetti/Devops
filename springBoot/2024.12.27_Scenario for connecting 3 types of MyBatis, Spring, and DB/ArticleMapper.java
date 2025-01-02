package com.example1.testapp.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example1.testapp.domain.ArticleDto;
import com.example1.testapp.util.Criteria;



/*
 * MyBtis Helper
 * XML Tools
 * 
 */
@Mapper
public interface ArticleMapper {


    List<ArticleDto> selectArticleList();

    void insertArticle(ArticleDto article);

    ArticleDto selectArticleById(int id);

    void updateArticle(ArticleDto articleDto);

    List<ArticleDto> findArticleList(Criteria criteria);

}
