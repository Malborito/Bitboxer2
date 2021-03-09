package com.bbx.practica.config;

import com.bbx.practica.utilities.item.DTOToItem;
import com.bbx.practica.utilities.item.ItemToDTO;
import com.bbx.practica.utilities.pricereduction.DTOToPriceReduction;
import com.bbx.practica.utilities.pricereduction.PriceReductionToDTO;
import com.bbx.practica.utilities.supplier.DTOToSupplier;
import com.bbx.practica.utilities.supplier.SupplierToDTO;
import com.bbx.practica.utilities.user.DTOToUser;
import com.bbx.practica.utilities.user.UserToDTO;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ConverterConfig implements WebMvcConfigurer {

    public void addFormatters(FormatterRegistry formatterRegistry){

        formatterRegistry.addConverter(new DTOToItem());

        formatterRegistry.addConverter(new ItemToDTO());

        formatterRegistry.addConverter(new SupplierToDTO());

        formatterRegistry.addConverter(new DTOToSupplier());

        formatterRegistry.addConverter(new PriceReductionToDTO());

        formatterRegistry.addConverter(new DTOToPriceReduction());

        formatterRegistry.addConverter(new UserToDTO());

        formatterRegistry.addConverter(new DTOToUser());

    }
}
