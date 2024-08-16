import { Injectable } from '@nestjs/common';
import { Ad } from 'src/ads/entities/ad.entity';
import { ForumTopic } from 'src/forum_topics/entities/forum_topic.entity';
import { ForumTopicsComment } from 'src/forum_topics_comments/entities/forum_topics_comment.entity';
import { ForumTopicsLike } from 'src/forum_topics_likes/entities/forum_topics_like.entity';
import { News } from 'src/news/entities/news.entity';
import { NewsComment } from 'src/news_comments/entities/news_comment.entity';
import { NewsLike } from 'src/news_likes/entities/news_like.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
// import { v4 as uuid } from 'uuid';
import { faker } from '@faker-js/faker';

@Injectable()
export class SeedingService {
  constructor(private readonly dataSource: DataSource) {}
  async seed(): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const usersRepository = queryRunner.manager.getRepository(User);
      const AdsRepository = queryRunner.manager.getRepository(Ad);
      const ForumTopicsRepository =
        queryRunner.manager.getRepository(ForumTopic);
      const ForumTopicsCommentsRepository =
        queryRunner.manager.getRepository(ForumTopicsComment);
      const ForumTopicsLikesRepository =
        queryRunner.manager.getRepository(ForumTopicsLike);
      const NewsRepository = queryRunner.manager.getRepository(News);
      const NewsCommentRepository =
        queryRunner.manager.getRepository(NewsComment);
      const NewsLikeRepository = queryRunner.manager.getRepository(NewsLike);

      const users = await usersRepository.find();
      await usersRepository.remove(users);

      const ads = await AdsRepository.find();
      await AdsRepository.remove(ads);

      const forumTopic = await ForumTopicsRepository.find();
      await ForumTopicsRepository.remove(forumTopic);

      const forumTopicComment = await ForumTopicsCommentsRepository.find();
      await ForumTopicsCommentsRepository.remove(forumTopicComment);

      const forumTopicLike = await ForumTopicsLikesRepository.find();
      await ForumTopicsLikesRepository.remove(forumTopicLike);

      const news = await NewsRepository.find();
      await NewsRepository.remove(news);

      const newsComment = await NewsCommentRepository.find();
      await NewsCommentRepository.remove(newsComment);

      const newsLike = await NewsLikeRepository.find();
      await NewsLikeRepository.remove(newsLike);

      // Users ----------------------------------------------------------------------------------------------------------------------------------------
      const salt = await bcrypt.genSalt();
      const encryptedPassword = await bcrypt.hash('123456789', salt);
      const u1 = usersRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: encryptedPassword,
      });
      const u2 = usersRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: encryptedPassword,
      });
      const u3 = usersRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: encryptedPassword,
      });
      const u4 = usersRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: encryptedPassword,
      });
      const u5 = usersRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: encryptedPassword,
      });
      const u6 = usersRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: encryptedPassword,
      });
      await usersRepository.save([u1, u2, u3, u4, u5, u6]);

      // ads ------------------------------------------------------------------------------------------------------------------------------------------
      const a1 = AdsRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        Address: faker.location.buildingNumber(),
        Email: faker.internet.email(),
        city: faker.location.city(),
        State: faker.location.state(),
        phoneNumber: faker.phone.number(),
        imageUrl01: [''],
        imageUrl02: [''],
        imageUrl03: [''],
        videoUrl: [''],
        userId: u1.id,
      });
      const a2 = AdsRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        Address: faker.location.buildingNumber(),
        Email: faker.internet.email(),
        city: faker.location.city(),
        State: faker.location.state(),
        phoneNumber: faker.phone.number(),
        imageUrl01: [''],
        imageUrl02: [''],
        imageUrl03: [''],
        videoUrl: [''],
        userId: u2.id,
      });
      const a3 = AdsRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        Address: faker.location.buildingNumber(),
        Email: faker.internet.email(),
        city: faker.location.city(),
        State: faker.location.state(),
        phoneNumber: faker.phone.number(),
        imageUrl01: [''],
        imageUrl02: [''],
        imageUrl03: [''],
        videoUrl: [''],
        userId: u3.id,
      });
      await AdsRepository.save([a1, a2, a3]);

      // forumTopic  -----------------------------------------------------------------------------------------------------------------------------------
      const ft1 = ForumTopicsRepository.create({
        userId: u1.id,
        header: 'Tips on how to buy and store seafood for optimal freshness',
        description: `<p>Buying and storing seafood properly is essential to maintain its freshness and quality. Here are some tips on how to buy and store seafood for optimal freshness. </p><br />
        <br />
        <ul>
          <li>
            Avoid Cross-Contamination: Store seafood away from other foods to prevent cross-contamination. Keep seafood in sealed containers or wrap tightly to prevent odors from spreading.
          </li>
          <br />
          <li>
            Use Freshness Quickly: Consume seafood as soon as possible after purchasing for the best taste and texture. Fresh seafood does not have a long shelf life, especially when stored at home.
          </li>
          <br />
          <li>
            Avoid Freezing Unless Necessary: While some seafood can be frozen for longer storage, fresh seafood is best consumed fresh. If freezing, use airtight containers or vacuum-sealed bags to prevent freezer burn.
          </li>
          <br />
          <li>
              Follow Use-By Dates: Pay attention to use-by dates or expiration dates on seafood packaging. Use seafood before the recommended date for optimal quality.
          </li>
        </ul>`,
      });

      const ft2 = ForumTopicsRepository.create({
        userId: u2.id,
        header: 'The health benefits of eating seafood',
        description: `<p>Eating seafood offers a wide range of health benefits due to its unique nutritional profile. Seafood is rich in essential nutrients, including omega-3 fatty acids, high-quality protein, vitamins, minerals, and other important compounds that contribute to overall health and well-being.</p><br />
        
        <ul>
          <li>
            Avoid Cross-Contamination: Store seafood away from other foods to prevent cross-contamination. Keep seafood in sealed containers or wrap tightly to prevent odors from spreading.
          </li>
          <br />
          <li>
            Use Freshness Quickly: Consume seafood as soon as possible after purchasing for the best taste and texture. Fresh seafood does not have a long shelf life, especially when stored at home.
          </li>
          <br />
          <li>
            Avoid Freezing Unless Necessary: While some seafood can be frozen for longer storage, fresh seafood is best consumed fresh. If freezing, use airtight containers or vacuum-sealed bags to prevent freezer burn.
          </li>
          <br />
          <li>
              Follow Use-By Dates: Pay attention to use-by dates or expiration dates on seafood packaging. Use seafood before the recommended date for optimal quality.
          </li>
        </ul>`,
      });

      const ft3 = ForumTopicsRepository.create({
        userId: u3.id,
        header: 'Stay updated on the latest news in the seafood industry',
        description: `<p>Buying and storing seafood properly is essential to maintain its freshness and quality. Here are some tips on how to buy and store seafood for optimal freshness.</p><br />
        
        <ul>
          <li>
            Avoid Cross-Contamination: Store seafood away from other foods to prevent cross-contamination. Keep seafood in sealed containers or wrap tightly to prevent odors from spreading.
          </li>
          <br />       
          <li>
            Use Freshness Quickly: Consume seafood as soon as possible after purchasing for the best taste and texture. Fresh seafood does not have a long shelf life, especially when stored at home.
          </li>
          <br />
          <li>
            Avoid Freezing Unless Necessary: While some seafood can be frozen for longer storage, fresh seafood is best consumed fresh. If freezing, use airtight containers or vacuum-sealed bags to prevent freezer burn.
          </li>
          <br />
          <li>
           Follow Use-By Dates: Pay attention to use-by dates or expiration dates on seafood packaging. Use seafood before the recommended date for optimal quality.
          </li>
        </ul>`,
      });

      const ft4 = ForumTopicsRepository.create({
        userId: u4.id,
        header:
          'Challenges and opportunities facing the seafood industry globally and locally.',
        description: `<p>Eating seafood offers a wide range of health benefits due to its unique nutritional profile. Seafood is rich in essential nutrients, including omega-3 fatty acids, high-quality protein, vitamins, minerals, and other important compounds that contribute to overall health and well-being.</p><br />

        <ul>
          <li>
            Avoid Cross-Contamination: Store seafood away from other foods to prevent cross-contamination. Keep seafood in sealed containers or wrap tightly to prevent odors from spreading.
          </li>
          <br />
          <li>
            Use Freshness Quickly: Consume seafood as soon as possible after purchasing for the best taste and texture. Fresh seafood does not have a long shelf life, especially when stored at home.
          </li>
          <br />
          <li>
            Avoid Freezing Unless Necessary: While some seafood can be frozen for longer storage, fresh seafood is best consumed fresh. If freezing, use airtight containers or vacuum-sealed bags to prevent freezer burn.
          </li>
          <br />
          <li>
              Follow Use-By Dates: Pay attention to use-by dates or expiration dates on seafood packaging. Use seafood before the recommended date for optimal quality.
          </li>
        </ul>`,
      });

      const ft5 = ForumTopicsRepository.create({
        userId: u5.id,
        header: 'Tips on how to buy and store seafood for optimal freshness',
        description: `<p>Buying and storing seafood properly is essential to maintain its freshness and quality. Here are some tips on how to buy and store seafood for optimal freshness.</p><br />
        
        <ul>
          <li>
            Avoid Cross-Contamination: Store seafood away from other foods to prevent cross-contamination. Keep seafood in sealed containers or wrap tightly to prevent odors from spreading.
          </li>
          <br />
          <li>
            Use Freshness Quickly: Consume seafood as soon as possible after purchasing for the best taste and texture. Fresh seafood does not have a long shelf life, especially when stored at home.
          </li>
          <br />
          <li>
            Avoid Freezing Unless Necessary: While some seafood can be frozen for longer storage, fresh seafood is best consumed fresh. If freezing, use airtight containers or vacuum-sealed bags to prevent freezer burn.
          </li>
          <br />
          <li>
              Follow Use-By Dates: Pay attention to use-by dates or expiration dates on seafood packaging. Use seafood before the recommended date for optimal quality.
          </li>
        </ul>`,
      });

      const ft6 = ForumTopicsRepository.create({
        userId: u6.id,
        header: 'The health benefits of eating seafood',
        description: `<p>Eating seafood offers a wide range of health benefits due to its unique nutritional profile. Seafood is rich in essential nutrients, including omega-3 fatty acids, high-quality protein, vitamins, minerals, and other important compounds that contribute to overall health and well-being.</p><br />

        <ul>
          <li>
            Avoid Cross-Contamination: Store seafood away from other foods to prevent cross-contamination. Keep seafood in sealed containers or wrap tightly to prevent odors from spreading.
          </li>
          <br />
          <li>
            Use Freshness Quickly: Consume seafood as soon as possible after purchasing for the best taste and texture. Fresh seafood does not have a long shelf life, especially when stored at home.
          </li>
          <br />
          <li>
            Avoid Freezing Unless Necessary: While some seafood can be frozen for longer storage, fresh seafood is best consumed fresh. If freezing, use airtight containers or vacuum-sealed bags to prevent freezer burn.
          </li>
          <br />
          <li>
              Follow Use-By Dates: Pay attention to use-by dates or expiration dates on seafood packaging. Use seafood before the recommended date for optimal quality.
          </li>
        </ul>`,
      });

      const ft7 = ForumTopicsRepository.create({
        userId: u2.id,
        header: 'Stay updated on the latest news in the seafood industry',
        description: `<p>Buying and storing seafood properly is essential to maintain its freshness and quality. Here are some tips on how to buy and store seafood for optimal freshness.</p><br />
        
        <ul>
          <li>
            Avoid Cross-Contamination: Store seafood away from other foods to prevent cross-contamination. Keep seafood in sealed containers or wrap tightly to prevent odors from spreading.
          </li>
          <br />
          <li>
            Use Freshness Quickly: Consume seafood as soon as possible after purchasing for the best taste and texture. Fresh seafood does not have a long shelf life, especially when stored at home.
          </li>
          <br />
          <li>
            Avoid Freezing Unless Necessary: While some seafood can be frozen for longer storage, fresh seafood is best consumed fresh. If freezing, use airtight containers or vacuum-sealed bags to prevent freezer burn.
          </li>
          <br />
          <li>
              Follow Use-By Dates: Pay attention to use-by dates or expiration dates on seafood packaging. Use seafood before the recommended date for optimal quality.
          </li>
        </ul>`,
      });

      const ft8 = ForumTopicsRepository.create({
        userId: u1.id,
        header:
          'Challenges and opportunities facing the seafood industry globally and locally.',
        description: `<p>Eating seafood offers a wide range of health benefits due to its unique nutritional profile. Seafood is rich in essential nutrients, including omega-3 fatty acids, high-quality protein, vitamins, minerals, and other important compounds that contribute to overall health and well-being.</p><br />

        <ul>
          <li>
            Avoid Cross-Contamination: Store seafood away from other foods to prevent cross-contamination. Keep seafood in sealed containers or wrap tightly to prevent odors from spreading.
          </li>
          <br />
          <li>
            Use Freshness Quickly: Consume seafood as soon as possible after purchasing for the best taste and texture. Fresh seafood does not have a long shelf life, especially when stored at home.
          </li>
          <br />
          <li>
            Avoid Freezing Unless Necessary: While some seafood can be frozen for longer storage, fresh seafood is best consumed fresh. If freezing, use airtight containers or vacuum-sealed bags to prevent freezer burn.
          </li>
          <br />
          <li>
              Follow Use-By Dates: Pay attention to use-by dates or expiration dates on seafood packaging. Use seafood before the recommended date for optimal quality.
          </li>
        </ul>`,
      });

      await ForumTopicsRepository.save([
        ft1,
        ft2,
        ft3,
        ft4,
        ft5,
        ft6,
        ft7,
        ft8,
      ]);

      // forumTopicComment ----------------------------------------------------------------------------------------------------------------------------
      const ft_C1 = ForumTopicsCommentsRepository.create({
        comment: 'Lovely',
        createdDate: new Date(),
        forumTopicId: ft1.id,
        userId: u1.id,
      });

      const ft_C2 = ForumTopicsCommentsRepository.create({
        comment: 'Thank you',
        createdDate: new Date(),
        forumTopicId: ft2.id,
        userId: u2.id,
      });
      const ft_C3 = ForumTopicsCommentsRepository.create({
        comment: 'Very impactful',
        createdDate: new Date(),
        forumTopicId: ft3.id,
        userId: u3.id,
        parentId: ft_C2.id,
      });
      const ft_C4 = ForumTopicsCommentsRepository.create({
        comment: 'This has been most helpful',
        createdDate: new Date(),
        forumTopicId: ft4.id,
        userId: u4.id,
      });
      const ft_C5 = ForumTopicsCommentsRepository.create({
        comment: 'Bless you',
        createdDate: new Date(),
        parentId: ft_C4.id,
        forumTopicId: ft5.id,
        userId: u5.id,
      });
      await ForumTopicsCommentsRepository.save([
        ft_C1,
        ft_C2,
        ft_C3,
        ft_C4,
        ft_C5,
      ]);

      // forumTopic Likes ------------------------------------------------------------------------------------------------------------------------------
      const ft_L1 = ForumTopicsLikesRepository.create({
        userId: u1.id,
        hasLiked: true,
        forumtopicCommentId: ft_C1.id,
      });
      const ft_L2 = ForumTopicsLikesRepository.create({
        userId: u1.id,
        hasLiked: true,
        forumtopicCommentId: ft_C2.id,
      });
      const ft_L3 = ForumTopicsLikesRepository.create({
        userId: u1.id,
        hasLiked: true,
        forumtopicCommentId: ft_C3.id,
      });
      const ft_L4 = ForumTopicsLikesRepository.create({
        userId: u1.id,
        hasLiked: true,
        forumtopicCommentId: ft_C4.id,
      });
      const ft_L5 = ForumTopicsLikesRepository.create({
        userId: u1.id,
        hasLiked: true,
        forumtopicCommentId: ft_C5.id,
      });

      await ForumTopicsLikesRepository.save([
        ft_L1,
        ft_L2,
        ft_L3,
        ft_L4,
        ft_L5,
      ]);

      // news ------------------------------------------------------------------------------------------------------------------------------------------
      const n1 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,
        userId: u1.id,
      });

      const n2 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u2.id,
      });

      const n3 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u3.id,
      });

      const n4 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u4.id,
      });

      const n5 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u5.id,
      });

      const n6 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u6.id,
      });

      const n7 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n8 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u5.id,
      });

      const n9 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u4.id,
      });

      const n10 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u3.id,
      });

      const n11 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n12 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n13 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n14 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u2.id,
      });

      const n15 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n16 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u5.id,
      });

      const n17 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n18 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n19 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n20 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n21 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n22 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u6.id,
      });

      const n23 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n24 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n25 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n26 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n27 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n28 = NewsRepository.create({
        imageUrl: '',
        title: 'Seafood Industry Booms as Demand Surges Amid Health',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n29 = NewsRepository.create({
        imageUrl: '',
        title: 'Nigerian Seafood Exporters Navigate Global Market Trends',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      const n30 = NewsRepository.create({
        imageUrl: '',
        title: 'Experts Emphasize Nutritional Value of Consumption',
        content: `<p>In recent years, Nigeria's seafood industry has witnessed a remarkable boom, driven by a surge in demand fueled by a growing health consciousness among consumers. With increasing awareness about the health benefits of seafood consumption, Nigerians are turning to fish and other marine delicacies as a nutritious and delicious addition to their diets.</p> 
          <br/>
          <p>One of the key factors driving this trend is the recognition of seafood as a rich source of essential nutrients such as omega-3 fatty acids, vitamins, and minerals. Health experts often advocate for including seafood in regular diets due to its potential benefits for heart health, brain function, and overall well-being. As a result, many Nigerians are incorporating more seafood into their meals, contributing to the industry's rapid growth.</p> 
          <br/>
          <p>Moreover, the rise of lifestyle-related diseases such as obesity, diabetes, and hypertension has prompted individuals to adopt healthier eating habits, including the consumption of lean proteins like fish and shellfish. Seafood is often perceived as a healthier alternative to red meat and processed foods, making it a popular choice among health-conscious consumers.</p> 
          <br/>
          <p>The booming demand for seafood has presented significant opportunities for players across the seafood value chain, including fishermen, aquaculture farmers, processors, and retailers. Fishermen and aquaculture farmers are scaling up production to meet the growing demand, while processors are investing in modern facilities and technologies to ensure quality and safety standards are upheld.</p> 
          <br/>
          <p>Furthermore, the government's efforts to promote the development of the aquaculture sector and improve fisheries management have also contributed to the industry's expansion. Initiatives aimed at increasing domestic fish production, enhancing value addition, and reducing post-harvest losses are helping to boost productivity and competitiveness in the seafood market.</p> 
          <br/>
          <p>Despite the positive outlook, challenges such as inadequate infrastructure, supply chain inefficiencies, and environmental concerns remain areas of concern for the seafood industry. Addressing these challenges will require collaborative efforts from government agencies, industry stakeholders, and the wider community to ensure the sustainable growth and development of Nigeria's seafood sector.</p> 
          <br/>
          <p>In conclusion, Nigeria's seafood industry is experiencing a period of rapid growth driven by increasing demand from health-conscious consumers. With its nutritional benefits, delicious taste, and diverse culinary options, seafood is poised to play a significant role in the country's food landscape. By addressing challenges and seizing opportunities, the industry can continue to thrive and contribute to Nigeria's economic development and public health goals.</p>`,

        userId: u1.id,
      });

      await NewsRepository.save([
        n1,
        n2,
        n3,
        n4,
        n5,
        n6,
        n7,
        n8,
        n9,
        n10,
        n11,
        n12,
        n13,
        n14,
        n15,
        n16,
        n17,
        n18,
        n19,
        n20,
        n21,
        n22,
        n23,
        n24,
        n25,
        n26,
        n27,
        n28,
        n29,
        n30,
      ]);

      // newsComment -----------------------------------------------------------------------------------------------------------------------------------
      const nC1 = NewsCommentRepository.create({
        reply:
          "It's great to see the seafood industry in Nigeria thriving, especially with the increasing awareness about health consciousness among consumers. Seafood is not only delicious but also packed with essential nutrients like omega-3 fatty acids and protein. With more people prioritizing healthier food choices, it's no surprise that the demand for seafood is surging. However, it's crucial that this growth is accompanied by sustainable practices to ensure the long-term health of Nigeria's marine ecosystems. Responsible fishing and aquaculture methods are essential to prevent overfishing and environmental degradation. Overall, this boom in the seafood industry presents both opportunities and challenges, and it's important for stakeholders to work together to promote sustainability and meet the growing demand for nutritious seafood.",
        createdDate: new Date(),
        newsId: n1.id,
        parentId: null,
        userId: u1.id,
      });

      const nC2 = NewsCommentRepository.create({
        reply:
          "It's great to see the seafood industry in Nigeria thriving, especially with the increasing awareness about health consciousness among consumers. Seafood is not only delicious but also packed with essential nutrients like omega-3 fatty acids and protein. With more people prioritizing healthier food choices, it's no surprise that the demand for seafood is surging. However, it's crucial that this growth is accompanied by sustainable practices to ensure the long-term health of Nigeria's marine ecosystems. Responsible fishing and aquaculture methods are essential to prevent overfishing and environmental degradation. Overall, this boom in the seafood industry presents both opportunities and challenges, and it's important for stakeholders to work together to promote sustainability and meet the growing demand for nutritious seafood.",
        createdDate: new Date(),
        newsId: n2.id,
        parentId: nC1.id,
        userId: u2.id,
      });

      const nC3 = NewsCommentRepository.create({
        reply:
          "It's great to see the seafood industry in Nigeria thriving, especially with the increasing awareness about health consciousness among consumers. Seafood is not only delicious but also packed with essential nutrients like omega-3 fatty acids and protein. With more people prioritizing healthier food choices, it's no surprise that the demand for seafood is surging. However, it's crucial that this growth is accompanied by sustainable practices to ensure the long-term health of Nigeria's marine ecosystems. Responsible fishing and aquaculture methods are essential to prevent overfishing and environmental degradation. Overall, this boom in the seafood industry presents both opportunities and challenges, and it's important for stakeholders to work together to promote sustainability and meet the growing demand for nutritious seafood.",
        createdDate: new Date(),
        newsId: n3.id,
        parentId: null,
        userId: u3.id,
      });

      const nC4 = NewsCommentRepository.create({
        reply:
          "It's great to see the seafood industry in Nigeria thriving, especially with the increasing awareness about health consciousness among consumers. Seafood is not only delicious but also packed with essential nutrients like omega-3 fatty acids and protein. With more people prioritizing healthier food choices, it's no surprise that the demand for seafood is surging. However, it's crucial that this growth is accompanied by sustainable practices to ensure the long-term health of Nigeria's marine ecosystems. Responsible fishing and aquaculture methods are essential to prevent overfishing and environmental degradation. Overall, this boom in the seafood industry presents both opportunities and challenges, and it's important for stakeholders to work together to promote sustainability and meet the growing demand for nutritious seafood.",
        createdDate: new Date(),
        newsId: n4.id,
        parentId: nC3.id,
        userId: u4.id,
      });

      const nC5 = NewsCommentRepository.create({
        reply:
          "It's great to see the seafood industry in Nigeria thriving, especially with the increasing awareness about health consciousness among consumers. Seafood is not only delicious but also packed with essential nutrients like omega-3 fatty acids and protein. With more people prioritizing healthier food choices, it's no surprise that the demand for seafood is surging. However, it's crucial that this growth is accompanied by sustainable practices to ensure the long-term health of Nigeria's marine ecosystems. Responsible fishing and aquaculture methods are essential to prevent overfishing and environmental degradation. Overall, this boom in the seafood industry presents both opportunities and challenges, and it's important for stakeholders to work together to promote sustainability and meet the growing demand for nutritious seafood.",
        createdDate: new Date(),
        newsId: n5.id,
        parentId: null,
        userId: u5.id,
      });

      const nC6 = NewsCommentRepository.create({
        reply:
          "It's great to see the seafood industry in Nigeria thriving, especially with the increasing awareness about health consciousness among consumers. Seafood is not only delicious but also packed with essential nutrients like omega-3 fatty acids and protein. With more people prioritizing healthier food choices, it's no surprise that the demand for seafood is surging. However, it's crucial that this growth is accompanied by sustainable practices to ensure the long-term health of Nigeria's marine ecosystems. Responsible fishing and aquaculture methods are essential to prevent overfishing and environmental degradation. Overall, this boom in the seafood industry presents both opportunities and challenges, and it's important for stakeholders to work together to promote sustainability and meet the growing demand for nutritious seafood.",
        createdDate: new Date(),
        newsId: n6.id,
        parentId: nC5.id,
        userId: u6.id,
      });
      await NewsCommentRepository.save([nC1, nC2, nC3, nC4, nC5, nC6]);

      // news Likes -------------------------------------------------------------------------------------------------------------------------------------
      const nL1 = NewsLikeRepository.create({
        userId: u2.id,
        newsCommentId: nC1.id,
        hasLiked: true,
      });

      const nL2 = NewsLikeRepository.create({
        userId: u2.id,
        newsCommentId: nC2.id,
        hasLiked: true,
      });

      const nL3 = NewsLikeRepository.create({
        userId: u2.id,
        newsCommentId: nC3.id,
        hasLiked: true,
      });

      const nL4 = NewsLikeRepository.create({
        userId: u2.id,
        newsCommentId: nC4.id,
        hasLiked: true,
      });

      const nL5 = NewsLikeRepository.create({
        userId: u2.id,
        newsCommentId: nC5.id,
        hasLiked: true,
      });

      const nL6 = NewsLikeRepository.create({
        userId: u2.id,
        newsCommentId: nC6.id,
        hasLiked: true,
      });
      await NewsLikeRepository.save([nL1, nL2, nL3, nL4, nL5, nL6]);

      await queryRunner.commitTransaction();
      console.log('successful data seeding');
    } catch (error) {
      console.error('Error during database seeding:', error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
