package info.somrat.rest.seeders;

import info.somrat.rest.enums.ERole;
import info.somrat.rest.models.Role;
import info.somrat.rest.models.Quote;
import info.somrat.rest.models.User;
import info.somrat.rest.repository.RoleRepository;
import info.somrat.rest.repository.QuoteRepository;
import info.somrat.rest.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.Date;

@Component
public class DatabaseSeeder {
    private static final Logger logger = LoggerFactory.getLogger(DatabaseSeeder.class);

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    QuoteRepository quoteRepository;

    @Autowired
    UserRepository userRepository;

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        logger.info("Run Seeder --------------------------");
//        seedUsersTable();
        seedRolesTable();
        seedTodosTable();
        logger.info("End Seeder --------------------------");
    }

    private void seedRolesTable() {
        roleRepository.deleteAll();
        logger.info("Start role seeding ---------- " + roleRepository.count());
        Role admin = new Role(ERole.ROLE_ADMIN);
        Role moderator = new Role(ERole.ROLE_MODERATOR);
        Role user = new Role(ERole.ROLE_USER);
        roleRepository.saveAll(Arrays.asList(admin, moderator, user));
        logger.info("End role seeding ---------- " + roleRepository.count());
    }

    private void seedTodosTable() {
        quoteRepository.deleteAll();
        Quote quote1 = new Quote(1L,"Title 1",  "nazmul", "Learn React 1", new Date());
        Quote quote2 = new Quote(2L,"Title 2",  "hossain", "Learn React 2", new Date());
        Quote quote3 = new Quote(3L,"Title 3",  "gm", "Learn React 3", new Date());
        quoteRepository.saveAll(Arrays.asList(quote1, quote2, quote3));
        logger.info("Quotes are seeding ---------- " + quoteRepository.count());
    }

    private void seedUsersTable() {
        userRepository.deleteAll();
        User user = new User("nazmul", "nazmul@gmail.com", "123456");
        userRepository.save(user);
        logger.info("Users are seeding ---------- " + userRepository.count());
    }
}
