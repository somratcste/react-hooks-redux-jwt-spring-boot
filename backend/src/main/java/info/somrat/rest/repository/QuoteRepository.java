package info.somrat.rest.repository;

import info.somrat.rest.models.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuoteRepository extends JpaRepository<Quote, Long> {
    Quote findOneById(Long id);
}
