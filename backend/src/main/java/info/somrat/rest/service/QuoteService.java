package info.somrat.rest.service;

import info.somrat.rest.models.Quote;
import info.somrat.rest.repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class QuoteService {

    @Autowired
    QuoteRepository quoteRepository;

    public List<Quote> index() {
        return quoteRepository.findAllByOrderByIdDesc();
    }

    public Quote show(Long id) {
       Quote quote = quoteRepository.findOneById(id);
       return quote;
    }

    public List<Quote> destroy(Long id) {
        quoteRepository.deleteById(id);
        return index();
    }

    public Quote update(Long id, Quote quote) {
        System.out.print(quote.toString());
        Quote quoteFromDb = quoteRepository.findOneById(id);
        quoteFromDb.setDescription(quote.getDescription());
        quoteFromDb.setUsername("nazmul");
        return quoteRepository.save(quoteFromDb);
    }

    public Quote save(Quote quote) {
        quote.setUsername("nazmul");
        return quoteRepository.save(quote);
    }
}
