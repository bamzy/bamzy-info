package info.bamzy.springboot.models.jpa;

import info.bamzy.springboot.models.NewsSourceDataRepoInterface;
import info.bamzy.springboot.models.enditiy.NewsSource;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.UUID;

@Repository
@Transactional
public class NewsSourceJPARepo implements NewsSourceDataRepoInterface {
    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public void insert(NewsSource ns) {
        this.entityManager.merge(ns);
    }

    @Override
    public void delete(UUID id) {

        var tmp = this.entityManager.find(NewsSource.class,id);
        this.entityManager.remove(tmp);
    }

    @Override
    public NewsSource findById(UUID id) {
        return this.entityManager.find(NewsSource.class,id);
    }

    public Collection<NewsSource> findAll(){
        Query query = entityManager.createQuery("SELECT e FROM newssources e");
        return (Collection<NewsSource>) query.getResultList();
    }

}
