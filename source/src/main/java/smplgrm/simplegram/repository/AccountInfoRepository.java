package smplgrm.simplegram.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import smplgrm.simplegram.entity.AccountInfo;

public interface AccountInfoRepository extends JpaRepository<AccountInfo, Integer> {

}
