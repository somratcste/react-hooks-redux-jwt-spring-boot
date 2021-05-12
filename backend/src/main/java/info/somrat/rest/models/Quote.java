package info.somrat.rest.models;

import lombok.*;
import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long id;

    @Column(nullable = false, length = 89)
    private String title;

    @Column(nullable = false, length = 89)
    private String username;

    private String description;
}
