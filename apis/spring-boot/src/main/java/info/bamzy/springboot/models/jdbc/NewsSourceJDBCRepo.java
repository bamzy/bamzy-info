package info.bamzy.springboot.models.jdbc;

import info.bamzy.springboot.models.NewsSourceDataRepoInterface;
import info.bamzy.springboot.models.enditiy.NewsSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public class NewsSourceJDBCRepo implements NewsSourceDataRepoInterface {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void insert(NewsSource ns){
        String INSERT_QUERY = """
                insert into newssources(id,display_name,url) 
                values (?,?,?)
                """;
        jdbcTemplate.update(INSERT_QUERY,ns.getId(),ns.getDisplayName(),ns.getUrl());
    }

    public void delete(UUID id){
        String DELETE_QUERY = """
                delete from newssources where id = ?
                """;
        jdbcTemplate.update(DELETE_QUERY,id);
    }

    public NewsSource findById(UUID id){
        String SELECT_QUERY = """
                select * from newssources where id = ?
                """;
        return jdbcTemplate.queryForObject(SELECT_QUERY,new BeanPropertyRowMapper<>(NewsSource.class),id);
    }
}
