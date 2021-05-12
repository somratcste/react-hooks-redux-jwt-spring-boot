package info.somrat.rest.controller;

import info.somrat.rest.models.Quote;
import info.somrat.rest.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/quotes")
public class QuoteController {

    @Autowired
    private QuoteService quoteService;

    @GetMapping("/")
    public List<Quote> index() {
        return quoteService.index();
    }

    @PostMapping("/")
    public Quote update(@RequestBody Quote quote) {
        return quoteService.save(quote);
    }

    @GetMapping("/{id}")
    public Quote show(@PathVariable Long id) {
        return quoteService.show(id);
    }

    @PutMapping("/{id}")
    public Quote update(@PathVariable Long id, @RequestBody Quote quote) {
        return quoteService.update(id, quote);
    }

    @DeleteMapping("/{id}")
    public List<Quote> destroy(@PathVariable Long id) {
        return quoteService.destroy(id);
    }
}
