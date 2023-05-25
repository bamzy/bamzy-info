package info.bamzy.springboot.models.springjpa;

import info.bamzy.springboot.models.enditiy.NewsSource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NewsSourceSpringJPARepo extends JpaRepository<NewsSource, UUID> {
}
